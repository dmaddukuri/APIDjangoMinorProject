# Generated by Django 2.0 on 2020-07-16 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apii', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Rname', models.CharField(max_length=50, unique=True)),
                ('cuisine', models.CharField(max_length=50)),
                ('rating', models.CharField(max_length=50)),
            ],
        ),
    ]
