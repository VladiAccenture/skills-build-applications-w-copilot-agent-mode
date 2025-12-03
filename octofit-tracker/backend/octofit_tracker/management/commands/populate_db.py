from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models

from octofit_tracker import models as octo_models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete existing data
        self.stdout.write(self.style.WARNING('Deleting existing data...'))
        get_user_model().objects.all().delete()
        octo_models.Team.objects.all().delete()
        octo_models.Activity.objects.all().delete()
        octo_models.Leaderboard.objects.all().delete()
        octo_models.Workout.objects.all().delete()

        # Create teams
        marvel = octo_models.Team.objects.create(name='Marvel')
        dc = octo_models.Team.objects.create(name='DC')

        # Create users (superheroes)
        users = [
            {'email': 'tony@marvel.com', 'username': 'IronMan', 'team': marvel},
            {'email': 'steve@marvel.com', 'username': 'CaptainAmerica', 'team': marvel},
            {'email': 'bruce@marvel.com', 'username': 'Hulk', 'team': marvel},
            {'email': 'clark@dc.com', 'username': 'Superman', 'team': dc},
            {'email': 'bruce@dc.com', 'username': 'Batman', 'team': dc},
            {'email': 'diana@dc.com', 'username': 'WonderWoman', 'team': dc},
        ]
        user_objs = []
        for u in users:
            user = get_user_model().objects.create_user(email=u['email'], username=u['username'], password='password', team=u['team'])
            user_objs.append(user)

        # Create activities
        activities = [
            {'user': user_objs[0], 'type': 'Run', 'duration': 30},
            {'user': user_objs[1], 'type': 'Swim', 'duration': 45},
            {'user': user_objs[2], 'type': 'Bike', 'duration': 60},
            {'user': user_objs[3], 'type': 'Run', 'duration': 25},
            {'user': user_objs[4], 'type': 'Swim', 'duration': 35},
            {'user': user_objs[5], 'type': 'Bike', 'duration': 50},
        ]
        for a in activities:
            octo_models.Activity.objects.create(user=a['user'], type=a['type'], duration=a['duration'])

        # Create workouts
        workouts = [
            {'name': 'Morning Cardio', 'description': 'Cardio workout for all'},
            {'name': 'Strength Training', 'description': 'Strength workout for all'},
        ]
        for w in workouts:
            octo_models.Workout.objects.create(**w)

        # Create leaderboard
        for team in [marvel, dc]:
            octo_models.Leaderboard.objects.create(team=team, points=100)

        self.stdout.write(self.style.SUCCESS('Database populated with test data.'))
