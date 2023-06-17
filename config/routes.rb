Rails.application.routes.draw do
  root "frontend#index"

  get "/agents/me", to: "agents#show"
end
