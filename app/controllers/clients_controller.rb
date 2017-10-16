class ClientsController < ApplicationController

  def index
		clients = Client.all
		render json: clients
  end

  def show
		client = Client.find(params[:id])
		render json: client
  end

  def new
  end

  def edit
  end


	private

  def client_params
    params.require(:client).permit(:id, :name)
  end

end
