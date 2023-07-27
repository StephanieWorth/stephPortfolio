
    $(document).ready(function() {
        $('.skill-per').each(function() {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({animatedValue: 0}).animate({animatedValue: per}, {
                duration: 1000,
                step: function() { // Use 'step' instead of 'stop' for updating the value during animation
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function() {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
            });
        });
    });


