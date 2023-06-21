Rails.application.routes.draw do
  root "frontend#index"

  get "/agents/me", to: "agents#show"
  get "/systems/headquarters", to: "systems#headquarters"
end
