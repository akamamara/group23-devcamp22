# Generated by Django 4.1.2 on 2022-10-14 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('craftsman', '0006_craftsman_services'),
        ('material', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='material',
            name='used_by',
            field=models.ManyToManyField(to='craftsman.craftsmancategory'),
        ),
        migrations.AlterField(
            model_name='material',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='material'),
        ),
    ]
