# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false|
|mail|string|null: false|
|encrypted_password|string|null: false|
|reset_password_token|string|null: true|
|reset_password_sent_at|datetime|null: ture|
|remember_created_at|datetime|null: true|
|created_at|timestamp|null: false|
|updated_at|timestamp|null: false|



### Association
- has_many :groups through: :members
- has_many :members
- has_many :messages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false|
|created_at|timestamp|null: false|
|updated_at|timestamp|null: false|


### Association
- has_many :users through: :members
- has_many :members
- has_many :messages

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|text|string|null: false|
|image_url|string|null: true|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: ture|
|created_at|timestamp|null: false|
|updated_at|timestamp|null: false|

### Association
- belongs_to :user
- belongs_to :group