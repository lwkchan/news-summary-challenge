feature 'News Summaries' do
  scenario 'Testing infrastructure works' do
    visit('/')
    expect(page).to have_content('News Summaries')
  end
end
