<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-secondary">Rápido y Seguro</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Conóceme</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="sm:px-6 lg:px-0">
            <div class="relative isolate overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
                <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                    <img src="https://static.ciudadanosenred.com.mx/wp-content/uploads/2023/07/reabren-hospital-veterinario-en-ciudad-de-mexio.jpg?x96214" alt="Product screenshot" width="2432" height="1442" class="-mb-12 w-[40rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10" />
                </div>
              <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { HeartIcon, BellIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: HeartIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: BellIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ChatBubbleLeftRightIcon,
    },
  ]
  </script>