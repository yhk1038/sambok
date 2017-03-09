class HomeController < ApplicationController
  def index
  end
  
  def main
	  # @img_url = "http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,h_630,w_1200,f_auto/v1/1084360/a_cckkf8.png"
	  # @img_url = "/asset/header/img/original_logo.png"
	  @img_url = "/asset/header/img/sambok_text_logo.png"
	  
	  # @bg_pink_img = "https://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/39.jpg"
	  @bg_pink_img = "/asset/header/img/bg_pink_img.jpg"

	  # Font-Controll
	  @main_title_size = 40
	  @section_title_size = 24 # px
	  @section_subtitle_size = 23 # px
	  @section_content_size = 20 # px
  end
end
