Rails.application.routes.draw do


	resources :clients, only: [:index, :show]

  # root to: 'application#angular'


end
