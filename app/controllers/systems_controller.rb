class SystemsController < ActionController::API
  def headquarters
    render json: myheadquarters.data.as_json
  end

  private

  def myagent
    Rails.cache.fetch("myagent", expires_in: 12.hours) do
      Spacetraders::AgentsApi
        .new
        .get_my_agent
    end
  end
  
  def myheadquarters
    Rails.cache.fetch("myheadquarters", expires_in: 12.hours) do
      Spacetraders::SystemsApi
        .new
        .get_system(headquarters_symbol)
    end
  end

  def headquarters_symbol
    tokens = myagent.data.headquarters.split("-")
    tokens.slice(0, 2).join("-")
  end
end
