require "rails_helper"

RSpec.describe "Systems", type: :request do
  describe "GET /headquarters" do
    subject { response }

    before { get "/systems/headquarters" }

    it { is_expected.to be_successful }
  end
end
