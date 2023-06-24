import yfinance as yf

def graphStock(tickersymbol):
    tickerSymbol = tickersymbol
    tickerData = yf.Ticker(tickerSymbol)
    tickerDF = tickerData.history(period = '1d', start='2015-5-23', end='2023-6-23')
    tickerDF = tickerDF[['Close']]
    return tickerDF
