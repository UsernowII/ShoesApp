SELECT 'CREATE DATABASE marketer_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'marketer_db')\gexec