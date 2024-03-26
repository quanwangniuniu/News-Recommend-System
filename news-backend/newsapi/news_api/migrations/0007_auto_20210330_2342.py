# Generated by Django 3.1.7 on 2021-03-30 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api', '0006_auto_20210326_1705'),
    ]

    operations = [
        migrations.RenameField(
            model_name='newsdetail',
            old_name='orgin',
            new_name='origin',
        ),
        migrations.AddField(
            model_name='history',
            name='id',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='recommend',
            name='species',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='history',
            name='userid',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='hotword',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]