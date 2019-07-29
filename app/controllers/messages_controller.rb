class MessagesController < ApplicationController

  

  def index
   find_group
  end

  def create

  end

  def find_group
   @group=Group.all
  end

  

end
