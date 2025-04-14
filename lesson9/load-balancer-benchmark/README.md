# 📦 Load Balancer Benchmark (Node.js)

Цей проєкт створений для **порівняння різних підходів до обробки навантаження в Node.js**, використовуючи:
- `cluster`
- `worker_threads`
- `http-proxy`
- ручну реалізацію Round Robin

> ✅ Ціль — визначити найефективніший спосіб балансування навантаження для CPU-bound запитів (наприклад, обчислення факторіала).

---

## 🔧 Як запустити

```bash
# 1. Створити проєкт
chmod +x setup-load-balancer-tests.sh
./setup-load-balancer-tests.sh

# 2. Перейти до директорії
cd load-balancer-benchmark

# 3. Запустити тести продуктивності
./benchmark.sh
```

> Усі підходи тестуються за допомогою `autocannon` на 100 паралельних з’єднань протягом 10 секунд.

---

## 📁 Структура

```
load-balancer-benchmark/
├── factorial.js                 # Функція для обчислення факторіала
├── server-thread.js             # Потік для факторіала
├── proxy-thread-server.js       # Потокові сервери для proxy
├── benchmark.sh                 # Запуск тестів з autocannon
├── tests/
│   ├── test1-single-thread.js         # Один потік (baseline)
│   ├── test2-worker-threads.js        # Worker Threads
│   ├── test3-cluster-rr.js            # Cluster з вбудованим RR
│   ├── test4-cluster-threads-rr.js    # Cluster + Worker Threads + Custom RR
│   └── test5-proxy-rr.js              # Proxy + Thread servers + RR
```

---

## 🦚 Опис кожного підходу

| Тест  | Назва                        | Суть підходу |
|--------|------------------------------|---------------|
| 1     | `Single Thread`             | Один сервер, обчислення в головному потоці |
| 2     | `Worker Threads`            | Один сервер, обчислення в потоках |
| 3     | `Cluster + RR`              | `cluster.fork()` на всі CPU, кожен обчислює локально |
| 4     | `Cluster + Threads + RR`    | Master передає запити по Round Robin → воркер → потік |
| 5     | `Proxy + Threads + RR`      | HTTP-проксі роздає запити на потокові сервери на різних портах |

---

## 🌟 Що де найкраще

| Підхід                        | Найкраще для                 |
|------------------------------|------------------------------|
| Single Thread                | Low-traffic, навчальні цілі  |
| Worker Threads               | CPU-bound, однопоточний API  |
| Cluster                      | Масштабування по ядрах       |
| Cluster + Threads + RR       | Макс. паралелізм, контроль   |
| Proxy + Threads              | Мікросервіси, ізольовані сервіси |

---

## 📊 Результати

> Автоматично виводяться після кожного тесту через `autocannon`: RPS, latency, throughput.

---

## 📒 Залежності

- [`http-proxy`](https://www.npmjs.com/package/http-proxy)
- [`autocannon`](https://github.com/mcollina/autocannon)