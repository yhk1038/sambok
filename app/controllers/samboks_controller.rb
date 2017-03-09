class SamboksController < ApplicationController
  before_action :set_sambok, only: [:show, :edit, :update, :destroy]
  layout 'sambok'

  # GET /samboks
  # GET /samboks.json
  def index
      @samboks = Sambok.all
      @sections = Section.all
  end

  # GET /samboks/1
  # GET /samboks/1.json
  def show
  end

  # GET /samboks/new
  def new
    @sambok = Sambok.new
  end

  # GET /samboks/1/edit
  def edit
  end

  # POST /samboks
  # POST /samboks.json
  def create
    @sambok = Sambok.new(sambok_params)

    respond_to do |format|
      if @sambok.save
        format.html { redirect_to @sambok, notice: 'Sambok was successfully created.' }
        format.json { render :show, status: :created, location: @sambok }
      else
        format.html { render :new }
        format.json { render json: @sambok.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /samboks/1
  # PATCH/PUT /samboks/1.json
  def update
    respond_to do |format|
      if @sambok.update(sambok_params)
        format.html { redirect_to @sambok, notice: 'Sambok was successfully updated.' }
        format.json { render :show, status: :ok, location: @sambok }
      else
        format.html { render :edit }
        format.json { render json: @sambok.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /samboks/1
  # DELETE /samboks/1.json
  def destroy
    @sambok.destroy
    respond_to do |format|
      format.html { redirect_to samboks_url, notice: 'Sambok was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sambok
      @sambok = Sambok.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sambok_params
      params.require(:sambok).permit(:name, :slogan, :img_path)
    end
end
