class AgentsController < ActionController::API
  def show
    render json: myagent.data.as_json
  end

  private

  def myagent
    Rails.cache.fetch("myagent", expires_in: 12.hours) do
      Spacetraders::AgentsApi
        .new
        .get_my_agent
    end
  end
end
