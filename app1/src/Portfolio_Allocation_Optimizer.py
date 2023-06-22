"""
Portfolio Allocation Optimizer
"""
import numpy as np
import datetime as dt
import pandas as pd
from pandas_datareader import data as pdr
import scipy.optimize as sc
import yfinance as yf
yf.pdr_override()
riskFreeRate = 0.0374
'User Inputs:'
portfolio = ['AAPL', 'MSFT', 'NVDA', 'META', 'ORCL', 'V']
ratio = np.array([.16, .16, .16, .3, .2, .02])
endDate = dt.datetime.now()
startDate = endDate - dt.timedelta(days=365)

"""
Input Data: 
Calculates Mean Returns of each stock and creates a covariance matrix (correlation) between each
stock's returns
"""
def getData(stocks, start, end):
    stockData = pdr.get_data_yahoo(stocks, start=start, end=end)
    stockData = stockData['Close']
    returns = stockData.pct_change()
    meanReturns = returns.mean()
    covMatrix = returns.cov()
    return meanReturns, covMatrix

"""
Modern Portfolio Theory:
net_returns: Return of each stock by its proportion of portfolio
standard deviation: Each Stock's Standard deviation
252 Trading Days in the Year
"""
def portfolioPerformance(ratio, meanReturns, covMatrix):
    net_returns = np.sum(meanReturns*ratio) * 252
    standard_deviations = np.sqrt(np.dot(ratio.T, np.dot(covMatrix, ratio))) * np.sqrt(252)
    return net_returns, standard_deviations

"""
Sharpe Ratio Optimization:
1. Calculate NEGATIVE Sharpe Ratio 'negativeSR'
2. Minimize the Negative Sharpe Ratio 'maxSR'
"""
def negativeSR(weights, meanReturns, covMatrix, riskFreeRate = 0.0374):
    pnet_returns, pstandard_deviations = portfolioPerformance(ratio, meanReturns, covMatrix)
    return - ((pnet_returns - riskFreeRate)/pstandard_deviations)

def maxSR(meanReturns, covMatrix, riskFreeRate = 0.0374, constraintSet=(0,1)):
    numAssets = len(meanReturns)
    args = (meanReturns, covMatrix,riskFreeRate)
    constraints = ({'type': 'eq', 'fun': lambda x: np.sum(x) - 1})
    bound = constraintSet
    bounds = tuple(bound for asset in range(numAssets))
    result = sc.minimize(negativeSR, numAssets*[1.0/numAssets], args=args, method='SLSQP', constraints=constraints)
    return result
"""
Variance Optimization:
1. Calculate Variance over Portfolio
2. Minimizes Variance

"""
def portfolioVariance(ratio, meanReturns, covMatrix):
    return portfolioPerformance(ratio, meanReturns, covMatrix)[1]

def minimizeVariance(meanReturns, covMatrix, constraintSet=(0,1)):
    numAssets = len(meanReturns)
    args = (meanReturns, covMatrix)
    constraints = ({'type': 'eq', 'fun': lambda x: np.sum(x) - 1})
    bound = constraintSet
    bounds = [(0, 1) for asset in range(numAssets)]
    result = sc.minimize(portfolioVariance, numAssets*[1.0/numAssets], args=args, method='SLSQP', constraints=constraints,
                         bounds=bounds)
    return result

def calculatedResults(meanReturns, covMatrix, constraintSet=(0,1), riskFreeRate = 0.0374):
    maxSR_Portfolio = maxSR(meanReturns, covMatrix)
    maxSR_returns, maxSR_std = portfolioPerformance(maxSR_Portfolio['x'], meanReturns, covMatrix)
    maxSr_allocation = pd.DataFrame(maxSR_Portfolio['x'].round(2), index=meanReturns.index, columns=['allocation'])

    minVar_Portfolio = minimizeVariance(meanReturns, covMatrix)
    minVar_returns, minSR_std = portfolioPerformance(minVar_Portfolio['x'], meanReturns, covMatrix)
    minVar_allocation = pd.DataFrame(minVar_Portfolio['x'].round(2), index=meanReturns.index, columns=['allocation'])

    return  (
    maxSr_allocation,
    "     ",
    ("Returns: " + str(maxSR_returns.round(2)), "Variance: " + str(maxSR_std.round(2))),\
    minVar_allocation,
    "     ",
    ("Returns: " + str(minVar_returns.round(2)), "Variance: " + str(minSR_std.round(2)))
)

"""
Efficient Frontier:
Will provide allocation for inputed level of risk

"""

def portfolioReturn(ratio, meanReturns, covMatrix):
    return portfolioPerformance(ratio, meanReturns, covMatrix)[0]
def efficientOpt(meanReturns, covMatrix, returnTarget, constraintSet=(0,1)):
    numAssets = len(meanReturns)
    args = (meanReturns, covMatrix)

    constraints = ({'type': 'eq', 'fun': lambda x: portfolioReturn(x, meanReturns, covMatrix) - returnTarget},
                   {'type': 'eq', 'fun': lambda x: np.sum(x) - 1})
    bound = constraintSet
    bounds = [(0, 1) for asset in range(numAssets)]
    effOpt = sc.minimize(portfolioVariance, numAssets*[1./numAssets], args=args, method='SLSQP', constraints=constraints,
                         bounds=bounds)
    return effOpt



meanReturns, covMatrix = getData(portfolio, start=startDate, end=endDate)
net_returns, standard_deviations = portfolioPerformance(ratio, meanReturns, covMatrix)
results_Sr = maxSR(meanReturns, covMatrix, riskFreeRate)
results_Var = minimizeVariance(meanReturns, covMatrix)
mmaxSR, maxWeights = results_Sr['fun'].round(2), results_Sr['x'].round(2)
minVar, minWeights = results_Var['fun'].round(2), results_Var['x'].round(2)

print(maxSR, maxWeights)
print(minVar, minWeights)
effOpt = efficientOpt(meanReturns, covMatrix, 0.2)





