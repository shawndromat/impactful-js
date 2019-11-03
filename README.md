## Impactful

A chrome extension to help qualitatively contextualize quantitative data.

### Background

One day in late 2016, I was sitting in Atlanta reading a news article about the Syrian conflict. It said that an estimated 500,000 people had died in the conflict already. I skimmed right over that sentence and right over that figure of 500,000 but 5 minutes later it dawned on me: the population of Atlanta proper - the very city I was sitting in - was less than 500,000 people. It was only through comparison with the city around me that I felt the true weight of 500,000 lives lost. 

I realized it can be so easy to gloss over bits like that in the news because those people are so far away and all lumped in to one number. But the impact if so much greater if you re-evaluate that number in terms of the people and places you know.

So I decided to make this tool to help ground detached facts and figures in the reader's reality. To humanize, localize and contextualize numbers like this in news articles and make world events more relatable.

### Experience

My first MVP on this project is to have a chrome extension which will be active on major news sites. When figures about a certain number of people (e.g. "180,000 people have been evacuated due to California wildfires"), a dialog will pop up, saying which U.S. city that number is closest too.

**Future possible features**:
- adding datatsets other than U.S. cities, particularly covering numbers of people both much smaller and much larger
- providing localized data, e.g. comparing to municipalities which are closer to the user and hopefully provide more personal context
- more sophisticated text processing and detection of relevant numbers
- processing data other than people
- data visualization

### Development

This first iteration is keeping to figures about people, and comparing numbers to only one small dataset, U.S. cities. The idea is to keep a narrow view on what kind of data to look at so I can focus on the following first:
- drive out integrations with news sites and get actual text processing in place
- work out a basic first visual user experience
