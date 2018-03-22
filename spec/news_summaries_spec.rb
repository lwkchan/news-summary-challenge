# Using js-test/newsstub.json as test case

NUMBER_OF_ARTICLES = 9;

feature 'News Summaries' do
  it 'News summaries are on home root' do
    visit('/')
    expect(page).to have_content('News Summaries')
  end

  it 'Article links are displayed' do
    visit('/')
    find_link('Trump and Juncker under fire for hailing Putin election victory').visible?
  end

  it 'Clicking on the link directs user to the website' do
    visit('/')
    click_on('Trump and Juncker under fire for hailing Putin election victory')
    expect(page.current_url).to eq('https://www.theguardian.com/uk-news/2018/mar/20/tories-attack-junckers-nauseating-letter-congratulating-putin')
  end

  it 'Shows a short summary for an article' do
    visit('/')
    expect(page).to have_content(	"Donald Trump and Jean-Claude Juncker have broken ranks with western disapproval for Vladimir Putin, issuing their congratulations to the Russian leader for his electoral success even as diplomats were flown out of the UK in retribution for the Salisbury nerve agent attack.")
  end

  it 'has an image for each article' do
    visit('/')
    counter = 1
    while counter <= NUMBER_OF_ARTICLES do
      expect(page).to have_selector("img[id='image-#{counter}']")
      counter += 1
    end
  end
end
