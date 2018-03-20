# Using js-test/newsstub.json as test case

feature 'News Summaries' do
  it 'News summaries are on home root' do
    visit('/')
    expect(page).to have_content('News Summaries')
  end

  it 'Article links are displayed' do
    visit('/')
    find_link('https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language').visible?
  end

  it 'Clicking on the link directs user to the website' do
    visit('/')
    click_on('https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language')
    expect(browser.current_url).to eq('https://www.theguardian.com/education/2018/mar/09/private-school-teacher-banned-oundle-school-racist-language')
  end
end
