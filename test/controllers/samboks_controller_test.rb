require 'test_helper'

class SamboksControllerTest < ActionController::TestCase
  setup do
    @sambok = samboks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:samboks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create sambok" do
    assert_difference('Sambok.count') do
      post :create, sambok: { img_path: @sambok.img_path, name: @sambok.name, slogan: @sambok.slogan }
    end

    assert_redirected_to sambok_path(assigns(:sambok))
  end

  test "should show sambok" do
    get :show, id: @sambok
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @sambok
    assert_response :success
  end

  test "should update sambok" do
    patch :update, id: @sambok, sambok: { img_path: @sambok.img_path, name: @sambok.name, slogan: @sambok.slogan }
    assert_redirected_to sambok_path(assigns(:sambok))
  end

  test "should destroy sambok" do
    assert_difference('Sambok.count', -1) do
      delete :destroy, id: @sambok
    end

    assert_redirected_to samboks_path
  end
end
