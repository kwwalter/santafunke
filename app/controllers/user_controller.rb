class UserController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      flash[:message] = "You are logged in!"
    else
      flash[:message] = @user.errors.full_messages.to_sentence
    end

    redirect_to root_path
  end

  private

    def user_params
      return params.require(:user).permit(:email, :password)
    end
end
