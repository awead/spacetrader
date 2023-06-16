require "rails_helper"

RSpec.describe "Agents", type: :request do
  describe "GET /show" do
    subject { response }

    before { get "/agents/me" }

    it { is_expected.to be_successful }
  end
end
