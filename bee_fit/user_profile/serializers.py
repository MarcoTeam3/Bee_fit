from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer


class UserSerializer(UserDetailsSerializer):

    age = serializers.IntegerField(source="userprofile.age", allow_null=True, required=False)
    sexe = serializers.CharField(source="userprofile.sexe", allow_blank=True, required=False)
    taille = serializers.IntegerField(source="userprofile.taille", allow_null=True, required=False)
    objectif_poids = serializers.IntegerField(source="userprofile.objectif_poids", allow_null=True, required=False)
    poids = serializers.IntegerField(source="userprofile.poids", allow_null=True, required=False)
    expected_calories = serializers.IntegerField(source="userprofile.expected_calories", allow_null=True, required=False)
    allergies = serializers.ListField(source="userprofile.allergies", child=serializers.CharField(), allow_empty=True, required=False)
    diabetique = serializers.CharField(source="userprofile.diabetique", allow_blank=True, required=False)

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + ('age', 'sexe', 'taille', 'poids', 'objectif_poids', 'expected_calories', 'allergies', 'diabetique')

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('userprofile', {})
        age = profile_data.get('age')
        sexe = profile_data.get('sexe')
        taille = profile_data.get('taille')
        objectif_poids = profile_data.get('objectif_poids')
        poids = profile_data.get('poids')
        expected_calories = profile_data.get('expected_calories')
        allergies = profile_data.get('allergies')
        diabetique = profile_data.get('diabetique')

        instance = super(UserSerializer, self).update(instance, validated_data)

        # get and update user profile
        profile = instance.userprofile
        if profile_data:
            if age:
                profile.age = age
            if taille:
                profile.taille = taille
            if sexe:
                profile.sexe = sexe
            if objectif_poids:
                profile.objectif_poids = objectif_poids
            if poids:
                profile.poids = poids
            if expected_calories:
                profile.expected_calories = expected_calories
            if allergies:
                profile.allergies = allergies
            if diabetique:
                profile.diabetique = diabetique
            profile.save()
        return instance
