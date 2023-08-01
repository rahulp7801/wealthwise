def scrape_yahoo_finance_news():
    url = "https://finance.yahoo.com/"
    response = requests.get(url)
    print(response.status_code)  # Add this line to print the status code
    soup = BeautifulSoup(response.text, 'html.parser')
    headlines = []

    for article in soup.find_all('h3', class_='Mb(5px)'):
        headlines.append(article.text)

    print(headlines)  # Add this line to print the fetched headlines
    return headlines
