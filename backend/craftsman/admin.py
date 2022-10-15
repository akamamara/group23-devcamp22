from django.contrib import admin
from .models import Craftsman, CraftsmanCategory,CraftsmanService

# Register your models here.
# class CraftsmanServiceInline(admin.TabularInline):
#     model = CraftsmanService

class CraftsmanAdmin(admin.ModelAdmin):
    list_display = ('name', 'category')
    # inlines = (CraftsmanServiceInline, )

class CraftsmanCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

class CraftsmanServiceAdmin(admin.ModelAdmin):
    pass

admin.site.register(Craftsman, CraftsmanAdmin)
admin.site.register(CraftsmanCategory, CraftsmanCategoryAdmin)
admin.site.register(CraftsmanService, CraftsmanServiceAdmin)