class Section < ActiveRecord::Base
    def devide(spliter: false, section: 'subtitle')
        # <p class="section-subtitle" style="text-align: center;">청년영상제작크루 삼복프로덕션은 모바일에 특화된 영상콘텐츠를 만드는</p>
        result = self.content.split('///').map { |sentance|
            s = sentance.split('')
            s.pop; s.pop
            
            case section
            when 'subtitle'
                unless s.join.length.zero?
                    if s.join.length == 1
                        @result = '<p class="section-subtitle" style="text-align: center;">&nbsp;</p>'
                    else
                        @result = '<p class="section-subtitle" style="text-align: center;">' + s.join + '</p>'
                    end
                end
            when 'content'
                unless s.join.length.zero?
                    if s.join.length == 1
                        @result = '<p class="section-content" style="text-align: center;">&nbsp;</p>'
                    else
                        @result = '<p class="section-content" style="text-align: center;">' + s.join + '</p>'
                    end
                end
            end
            
            @result
        }[1..-1]
        
        return result if spliter
        return result.join unless spliter
    end
end
