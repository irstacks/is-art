# Update css.
cp ~/dev/isaacardis/.tmp/styles/main.css ~/dev/isaacardis/app/styles/main.css

# Da whole dang ding.
rsync -avz --update ~/dev/isaacardis/app/ areteh.co:isaacardis/

# Bower components.
rsync -avz --update ~/dev/isaacardis/bower_components/ areteh.co:isaacardis/bower_components/
