<template>
    <div class="container">
        <div class="col-lg-6 offset-lg-3">
            <div v-if="ready">
            <p v-for="(user, i) in info" :key="i">
                {{ user.username }} {{ user.type }}
            </p>
            </div>

            <div v-if="!ready">
            <h4>Enter your username</h4>
            <form @submit.prevent="addUser">
                <div class="form-group row">
                <input
                    type="text"
                    class="form-control col-9"
                    v-model="username"
                    placeholder="Enter username here"
                />
                <input
                    type="submit"
                    value="Join"
                    class="btn btn-sm btn-info ml-1"
                />
                </div>
            </form>
            </div>
            <h2 v-else>{{ username }}</h2>
            <div class="card bg-info" v-if="ready">
            <div class="card-header text-white">
                <h4>
                My Chat App
                <span class="float-right">{{ connections }} connections</span>
                </h4>
            </div>
            <ul class="list-group list-group-flush text-right">
                <small v-if="typing" class="text-white">{{ typing }} is typing</small>
                <li class="list-group-item" v-for="(message, i) in messages" :key="i">
                <span :class="{ 'float-left': message.type === 1 }">
                    {{ message.message }}
                    <small>:{{ message.user }}</small>
                </span>
                </li>
            </ul>

            <div class="card-body">
                <form @submit.prevent="send">
                <div class="form-group">
                    <input
                    type="text"
                    class="form-control"
                    v-model="newMessage"
                    placeholder="Enter message here"
                    />
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>
