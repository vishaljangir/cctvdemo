ActiveAdmin.register Item do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
  menu :priority => 5, :label => 'ITEMS'
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end


 index do
    selectable_column
    id_column
    column :customer
    column :product_name
    column "Cctv", :cctv_id   
    column :price
    column :quantity
    actions
  end

  
end
