Rails.application.routes.draw do

	namespace :api, defaults:{format: :json} do
		resources :clients, only: [:index, :show]
	end

  root to: 'application#index'

	get "*path" => "application#index"
end
