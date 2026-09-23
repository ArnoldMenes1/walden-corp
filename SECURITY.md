# Politique de sécurité

**Version :** 1.0
**Portée :** Dépôt `walden-corp`

---

## Signaler une vulnérabilité

**Ne crée jamais d'issue publique pour signaler une vulnérabilité.**

### Contact

- Email : `security@waldencorp.com`
- PGP : disponible sur demande

### Informations à fournir

1. Description de la vulnérabilité.
2. Étapes de reproduction.
3. Impact potentiel.
4. Version concernée.
5. Solution suggérée (facultatif).

### Délai de réponse

- **Accusé de réception** : 24 heures.
- **Évaluation initiale** : 72 heures.
- **Correctif** : selon la gravité (voir tableau ci-dessous).

---

## Gravité et délais

| Gravité | Description | Délai correctif |
|---------|-------------|-----------------|
| Critique | RCE, fuite de données massives | 24 h |
| Haute | Élévation de privilèges, injection | 72 h |
| Moyenne | XSS, CSRF | 7 jours |
| Basse | Fuite d'information mineure | 30 jours |

---

## Bonnes pratiques

### Pour les contributeurs

- Ne jamais committer de secrets (clés API, tokens, mots de passe).
- Utiliser `.env.local` pour les variables sensibles.
- Vérifier les dépendances (`npm audit`, `pip-audit`).
- Respecter les standards de sécurité (`foundation/standards/security.md`).

### Pour les mainteneurs

- Activer Dependabot.
- Activer les alertes de sécurité GitHub.
- Vérifier les PR avec des outils SAST.
- Mettre à jour les dépendances régulièrement.

---

## Secrets et configuration

- **Aucun secret** dans le dépôt.
- **Fichier `.env.example`** fourni sans valeurs.
- **Variables d'environnement** documentées dans `README.md`.
- **Rotation** des secrets tous les 90 jours.

---

## Conformité

- **RGPD** : voir [`policies/privacy.md`](./policies/privacy.md).
- **Licences tierces** : voir [`legal/third-party-licenses.md`](./legal/third-party-licenses.md).
- **Politique de sécurité détaillée** : voir [`policies/security.md`](./policies/security.md).

---

## Reconnaissance

Nous remercions publiquement les personnes qui signalent des vulnérabilités de manière responsable, sauf demande contraire.

---

*Fin du document.*
