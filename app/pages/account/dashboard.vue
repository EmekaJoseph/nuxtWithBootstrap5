<template>
    <div>

        <div class="container">
            <div class="min-vh-100 d-flex justify-content-center align-items-center">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="DatePicker-tab" data-bs-toggle="tab"
                                        data-bs-target="#DatePicker" type="button" role="tab" aria-controls="DatePicker"
                                        aria-selected="true">
                                        DatePicker
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="Select-tab" data-bs-toggle="tab"
                                        data-bs-target="#Select" type="button" role="tab" aria-controls="Select"
                                        aria-selected="false">
                                        Select
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="Alert-tab" data-bs-toggle="tab" data-bs-target="#Alert"
                                        type="button" role="tab" aria-controls="Alert" aria-selected="false">
                                        Alert
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="EasyTable-tab" data-bs-toggle="tab"
                                        data-bs-target="#EasyTable" type="button" role="tab" aria-controls="EasyTable"
                                        aria-selected="false">
                                        EasyTable
                                    </button>
                                </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content py-4">
                                <div class="tab-pane active" id="DatePicker" role="tabpanel"
                                    aria-labelledby="DatePicker-tab">
                                    <DashboardDatePicker />
                                </div>
                                <div class="tab-pane" id="Select" role="tabpanel" aria-labelledby="Select-tab">
                                    <DashboardVueSelect />
                                </div>
                                <div class="tab-pane" id="Alert" role="tabpanel" aria-labelledby="Alert-tab">
                                    <DashboardAlert />
                                </div>
                                <div class="tab-pane" id="EasyTable" role="tabpanel" aria-labelledby="EasyTable-tab">
                                    <DashboardDataTable />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import api from '~/api';

definePageMeta({
    meta: {
        requiredRole: 'admin',
        // middleware: 'auth',
    }
})


// onMounted(async () => {
//     const resp = await api.login('1')
// })


</script>