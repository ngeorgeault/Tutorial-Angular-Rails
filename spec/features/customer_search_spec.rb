require 'rails_helper'

feature "Customer Search" do 

  # Setup data for creating our test user
  let(:email)    { "bob@example.com" }
  let(:password) { "password123" }

  # Helper method for creating customers
  def create_customer(first_name: nil,
                       last_name: nil,
                           email: nil
                      )

    first_name ||= Faker::Name.first_name
    last_name  ||= Faker::Name.last_name
    email      ||= "#{Faker::Internet.user_name}#{rand(1000)}@" +
                     "#{Faker::Internet.domain_name}"

    Customer.create!(first_name: first_name,
                      last_name: last_name,
                       username: "#{Faker::Internet.user_name}#{rand(1000)}",
                          email: email
                    )
  end


  # Setup User and customers before each test then login
  before do 
    User.create!(email: email,
                 password: password,
                 password_confirmation: password
                 )


  # Create our test customers before each test
  create_customer first_name: "Robert",
                  last_name:  "Aaron"
  
  create_customer first_name: "Bob",
                  last_name:  "Johnson"
  
  create_customer first_name: "JR",
                  last_name:  "Bob"
  
  create_customer first_name: "Bobby",
                  last_name:  "Dobbs"
  
  create_customer first_name: "Bob",
                  last_name:  "Jones",
                  email:      "bob123@somewhere.net"

  visit "/customers"
  fill_in "Email",      with: "bob@example.com"
  fill_in "Password",   with: "password123"
  click_button "Log in"
  
  end

  scenario "search by name" do 

    within "section.search-form" do 
      fill_in "keywords", with: "bob"
    end

    within "section.search-results" do 
      expect(page).to have_content("Results")
      expect(page.all("ol li.list-group-item").count).to eql(4)
      
      expect(page.all("ol li.list-group-item")[0]).to have_content("JR")
      expect(page.all("ol li.list-group-item")[0]).to have_content("Bob")
      
      expect(page.all("ol li.list-group-item")[3]).to have_content("Bob")
      expect(page.all("ol li.list-group-item")[3]).to have_content("Jones")
      expect(page.all("ol li.list-group-item")[3]).to have_content("bob123@somewhere.net")
    end
  end

  scenario "search by email" do 
    
    within "section.search-form" do
      fill_in "keywords", with: "bob123@somewhere.net"
    end

    within "section.search-results" do 
      expect(page).to have_content("Results")

      expect(page.all("ol li.list-group-item")[0]).to have_content("bob123@somewhere.net")
      expect(page.all("ol li.list-group-item")[0]).to have_content("Bob")
      expect(page.all("ol li.list-group-item")[0]).to have_content("Jones")

      expect(page.all("ol li.list-group-item")[1]).to have_content("JR")
      expect(page.all("ol li.list-group-item")[1]).to have_content("Bob")

      expect(page.all("ol li.list-group-item")[2]).to have_content("Bob")
      expect(page.all("ol li.list-group-item")[2]).to have_content("Dobbs")
    end
  end

end