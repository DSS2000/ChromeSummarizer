# Imports
import requests
from bs4 import BeautifulSoup
from gensim.summarization import summarize
print("Ji")
url = 'https://en.wikipedia.org/wiki/Bear'
def summa(url):
    page = requests.get(url).text
    # Turn page into BeautifulSoup object to access HTML tags
    soup = BeautifulSoup(page)
    # Get headline
    headline = soup.find('h1').get_text()
    # Get text from all <p> tags.
    p_tags = soup.find_all('p')
    # Get the text from each of the “p” tags and strip surrounding whitespace.
    p_tags_text = [tag.get_text().strip() for tag in p_tags]
    # Filter out sentences that contain newline characters '\n' or don't contain periods.
    sentence_list = [sentence for sentence in p_tags_text if not '\n' in sentence]
    sentence_list = [sentence for sentence in sentence_list if '.' in sentence]
    # Combine list items into string.
    article = ' '.join(sentence_list)
    summary = summarize(article, ratio=0.008)
    return summary
print(summa(url))
