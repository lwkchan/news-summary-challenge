# Using js-test/newsstub.json as test case

NUMBER_OF_ARTICLES = 10;

feature 'News Summaries' do
  it 'News summaries are on home root' do
    visit('/')
    expect(page).to have_content('News Summaries')
  end

  it 'Article links are displayed' do
    visit('/')
    find_link('Private school teacher banned for using racist language').visible?
  end

  it 'Clicking on the link directs user to the website' do
    visit('/')
    click_on('Private school teacher banned for using racist language')
    expect(page.current_url).to eq('https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language')
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
