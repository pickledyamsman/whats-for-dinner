Rails.application.routes.draw do
  devise_for :users
  root to: 'application#angular'
  
  resources :events, only: [:create, :index, :show] do
    resources :restaurants, only: [:show, :create] do
    end
  end

  post 'events/:event_id/restaurants/:id/upvote' => 'restaurant_upvotes#create', as: :restaurant_upvotes
  delete 'events/:event_id/restaurants/:id/upvote' => 'restaurant_upvotes#destroy', as: :restaurant_upvote

  post 'events/:event_id/restaurants/:id/downvote' => 'restaurant_downvotes#create', as: :restaurant_downvotes
  delete 'events/:event_id/restaurants/:id/downvote' => 'restaurant_downvotes#destroy', as: :restaurant_downvote

end
