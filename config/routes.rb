Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create] do 
      resources :workout_classes, only: [:index]
    end

    #? in progress: post request to follow a class
    resources :users_workout_classes, only: [:create, :destroy, :index, :show]

    #* finished: fetches info about specific workout class 
    resources :workout_classes, only: [:show] 

    #* finished: fetches classes for specific category
    namespace :classes do 
      resources :categories, only: [:show]
    end

    #* finished: category fetching 
    resources :categories, only: [:index]
    
    #* finished: session login/signup
    resource :session, only: [:create, :destroy]
    
    #! testing: token stuff still testing 
    resources :tokens, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
