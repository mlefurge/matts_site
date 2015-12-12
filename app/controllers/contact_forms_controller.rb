class ContactFormsController < ApplicationController

  def new
  end

  def create
    @contact_form = ContactForm.new(contact_form_params)
    @contact_form.request = request
    if @contact_form.deliver
      flash[:notice] = 'Thank you for your message!'
      redirect_to root_path(anchor: "contact_info")
    else
      flash[:notice] = @contact_form.errors.full_messages
      redirect_to root_path(anchor: "contact_info")
    end
  end

  private

  def contact_form_params
    params.require(:contact_form).permit(:name, :email, :message)
  end

end
