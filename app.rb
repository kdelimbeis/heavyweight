require 'sinatra'
require 'sendgrid-ruby'

include SendGrid

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

get '/inventory' do
  erb :inventory
end

post '/submit' do
  @name = params[:name]
	@email = params[:email]
from = Email.new(email: @email)
to = Email.new(email: 'kdelimbeis@comcast.net')
subject = 'Thanks for contacting Heavyweight Auto Sales'
content = Content.new(type: 'text/plain', value: @name + ', we will reply within 2 business days.')
mail = Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers
end
