require "rails_helper"

RSpec.describe "Frontend", type: :request do
  describe "Root path" do
    it "returns http success" do
      get "/"
      expect(response).to have_http_status(:success)
    end
  end
end
