Rails.application.routes.draw do
  devise_for :users
  root to: 'application#angular'
  
  resources :events, only: [:create, :index, :show] do
    resources :restaurants, only: [:show, :create] do
      member do
        put '/upvote' => 'restaurants#upvote'
        put '/downvote' => 'restaurants#downvote'
      end
    end
  end

end
