class AgentsController < ActionController::API
  def show
    render json: agent_api.get_my_agent.data.as_json
  end

  private

  def agent_api
    @agent_api ||= Spacetraders::AgentsApi.new
  end
end
