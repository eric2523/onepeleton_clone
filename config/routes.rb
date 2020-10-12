Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create] do 
      resources :workout_classes, only: [:index]
    end

    resources :workout_classes, only: [:show] 

    namespace :classes do 
      resources :categories, only: [:index, :show]
    end

    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
