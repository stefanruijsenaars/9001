# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-01-16 06:56
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20170116_0653'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlaylistItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('track_id', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=250)),
                ('artist', models.CharField(max_length=250)),
                ('img_url', models.CharField(max_length=250)),
                ('stream_url', models.CharField(max_length=250)),
                ('duration', models.IntegerField()),
                ('platform', models.CharField(max_length=50)),
                ('playlist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.Playlist')),
            ],
            options={
                'verbose_name': 'Playlist item',
                'verbose_name_plural': 'Playlists items',
            },
        ),
        migrations.DeleteModel(
            name='Cow',
        ),
        migrations.DeleteModel(
            name='PlaylistSoundmooseItem',
        ),
    ]
