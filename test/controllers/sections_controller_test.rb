require 'test_helper'

class SectionsControllerTest < ActionController::TestCase
  setup do
    @section = sections(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:sections)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create section" do
    assert_difference('Section.count') do
      post :create, section: { bg_img_path: @section.bg_img_path, content: @section.content, img_path: @section.img_path, name: @section.name, subtitle2: @section.subtitle2, subtitle2_size: @section.subtitle2_size, subtitle: @section.subtitle, subtitle_size: @section.subtitle_size }
    end

    assert_redirected_to section_path(assigns(:section))
  end

  test "should show section" do
    get :show, id: @section
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @section
    assert_response :success
  end

  test "should update section" do
    patch :update, id: @section, section: { bg_img_path: @section.bg_img_path, content: @section.content, img_path: @section.img_path, name: @section.name, subtitle2: @section.subtitle2, subtitle2_size: @section.subtitle2_size, subtitle: @section.subtitle, subtitle_size: @section.subtitle_size }
    assert_redirected_to section_path(assigns(:section))
  end

  test "should destroy section" do
    assert_difference('Section.count', -1) do
      delete :destroy, id: @section
    end

    assert_redirected_to sections_path
  end
end
