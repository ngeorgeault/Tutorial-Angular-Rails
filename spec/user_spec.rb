require 'rails_helper'

describe User do 
  describe "email validation" do
    let (:user) {
      User.new(email: "foo@example.com",
               password: "qwertyuiop",
               password_confirmation: "qwertyuiop")
    }
    it "prevents invalid email addresses being passed straight to data store" do 
      expect {
        user.update_attribute(:email, "foo@exapmle.com")
      }.to raise_error(
                        ActiveRecord::StatementInvalid,
                        /email_must_be_company_email/i
                        )
    end
  end
end