from . import (
    images,
    gangs,
    information_pages,
    oganizations,
    venues,
    events,
    billig,
    menu,
    documents,
    textitems,
    example,
    samf3,
    recruitment,
    recruitment_position,
    blogposts,
    recruitment_admissions,
)

# Insert seed scripts here (in order of priority)
# Format is (name, seed_function).

# If a seed function is slow, it may optionally yield a percent value
# between 0-100 at given points to show a progress indicator in the terminal
# It can also yield a text description of the current state (see example.py)

SEED_SCRIPTS = [
    ('images', images.seed),
    ('gang', gangs.seed),
    ('venue', venues.seed),
    ('event', events.seed),
    ('billig', billig.seed),
    ('menu', menu.seed),
    ('documents', documents.seed),
    ('information_page', information_pages.seed),
    ('textitems', textitems.seed),
    ('blogposts', blogposts.seed),
    ('organization', oganizations.seed),
    ('recruitment', recruitment.seed),
    ('recruitment_position', recruitment_position.seed),
    ('recruitment_admissions', recruitment_admissions.seed),

    # Example seed (not run unless targeted specifically)
    ('example', example.seed),
]

# These are not run by default (only when seeded specifically)
OPTIONAL_SEED_SCRIPTS = [
    ('samf3', samf3.seed),
]
