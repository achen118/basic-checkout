require 'spec_helper'
RSpec.describe Api::UsersController, type: :controller do
    describe "POST create" do
        context "when successful" do
            context "when valid credentials are provided" do
    
                it "successfully creates a new stripe user" do
    
                end
    
                it "successfully creates a new user in db" do
    
                end
            end
        end 
    
        context "when unsuccessful" do
            context "when the email is already registered" do
                user = User.new(email: "alicechen118@gmail.com", password: "asdfasdf")
                it "throws an error" do
                    expect{user.save}.to raise_error(NameError)
                end
                it "return a 422" do
    
                end
            end
    
            context "when password is too short" do
                it "throws an error" do
        
                end
                it "return a 422" do
    
                end
            end
        end
    end
end