import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pandas.plotting import register_matplotlib_converters
import yfinance as yf

stock_list = []

nasdaq_stock_list = pd.read_csv('nasdaqlisted.txt', sep='|')
other_stock_list = pd.read_csv('otherlisted.txt', sep='|')

nasdaq_df = pd.DataFrame(nasdaq_stock_list)
other_df = pd.DataFrame(other_stock_list)

for index, row in nasdaq_df.iterrows():
    stock_list.append(row[0])
for index, row in other_df.iterrows():
    stock_list.append(row[0])

def graphStock(tickersymbol):
    tickerSymbol = tickersymbol
    tickerData = yf.Ticker(tickerSymbol)
    tickerDF = tickerData.history(period = '1d', start='2015-5-23', end='2023-6-23')
    tickerDF = tickerDF[['Close']]
    plt.figure(figsize=(10, 4))
    plt.title('SPY From 2015 to 2020', fontsize=20)
    plt.xlabel('Time', fontsize=16)
    plt.ylabel('Price ($)', fontsize=16)
    plt.plot(tickerDF.Close)

    for year in range(2015,2024):
        plt.axvline(pd.to_datetime(str(year)+'-01-01'), color='k', linestyle='--', alpha=0.2)
    plt.show()
graphStock('SPY')